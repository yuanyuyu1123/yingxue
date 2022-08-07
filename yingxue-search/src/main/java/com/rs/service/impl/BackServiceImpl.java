package com.rs.service.impl;

import co.elastic.clients.elasticsearch.ElasticsearchClient;
import co.elastic.clients.elasticsearch.core.SearchResponse;
import co.elastic.clients.elasticsearch.core.search.Hit;
import com.rs.entity.Back;
import com.rs.service.IBackService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * @author yuan
 */
@Service
@Slf4j
public class BackServiceImpl implements IBackService {

    private ElasticsearchClient  elasticsearchClient;

    @Autowired
    public BackServiceImpl(ElasticsearchClient elasticsearchClient) {
        this.elasticsearchClient = elasticsearchClient;
    }

    @Override
    public List<Back> searchBackByCity(String city) {
        SearchResponse<Back> search = null;
        List<Back> backList = new ArrayList<>();
        try {
            search = elasticsearchClient.search(s -> s
                            .index("back")
                            .query(q -> q
                                    .match(m->m.field("city")
                                            .query(city))
                            ),
                    Back.class);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        log.debug("list:{}",search.hits().hits());
        for (Hit<Back> hit: search.hits().hits()) {
            if(hit.source() != null){
                backList.add(hit.source());
            }
        }
        return backList;
    }
}
