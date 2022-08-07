package com.rs.config;

import org.redisson.Redisson;
import org.redisson.api.RedissonClient;
import org.redisson.config.Config;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * @author yuan
 */
@Configuration
public class RedissonClientConfig {

    @Value("${com.rs.redis.address}")
    private String redisAddress;

    @Bean
    RedissonClient redisson() {
        //1、创建配置
        Config config = new Config();
        config.useSingleServer()
                .setAddress(redisAddress);
        return Redisson.create(config);
    }
}
