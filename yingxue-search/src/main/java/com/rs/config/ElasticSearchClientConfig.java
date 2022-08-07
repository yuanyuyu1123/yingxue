package com.rs.config;

import co.elastic.clients.elasticsearch.ElasticsearchClient;
import co.elastic.clients.json.jackson.JacksonJsonpMapper;
import co.elastic.clients.transport.ElasticsearchTransport;
import co.elastic.clients.transport.rest_client.RestClientTransport;
import org.apache.http.HttpHost;
import org.elasticsearch.client.RestClient;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * @author yuan
 */
@Configuration
public class ElasticSearchClientConfig {

    @Value("${com.rs.elasticsearch.host}")
    private String host;
    @Value("${com.rs.elasticsearch.port}")
    private Integer port;

    public ElasticSearchClientConfig() {
    }

    @Bean
    public ElasticsearchClient elasticsearchClient(){
        // Create the low-level client
        RestClient restClient = RestClient.builder(
                new HttpHost(host, port)).build();

        // Create the transport with a Jackson mapper
        ElasticsearchTransport transport = new RestClientTransport(
                restClient, new JacksonJsonpMapper());

        // And create the API client
        return new ElasticsearchClient(transport);
    }

}
