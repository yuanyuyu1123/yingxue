package com.rs.constant;

/**
 * @author yuan
 */
public interface RedisPrefix {

    /**
     * 商品前缀
     */
    String MENU_PREFIX= "PRODUCT:";
    /**
     * 用户不喜欢的列表
     */
    String USER_DISLIKE_PREFIX= "USER_DISLIKE:";
    /**
     * 用户喜欢视频数量前缀
     */
    String VIDEO_LIKE_COUNT_PREFIX = "VIDEO_LIKE_COUNT:";
    /**
     * 视频播放次数前缀
     */
    String VIDEO_PLAYED_COUNT_PREFIX = "VIDEO_PLAYED_COUNT:";
}
