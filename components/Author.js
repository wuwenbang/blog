import React from 'react'
import { Avatar, Divider } from 'antd'
import {
    WechatOutlined,
    GithubOutlined,
    ZhihuOutlined
} from '@ant-design/icons';
const Author = () => {
    return (
        <div className="author">
            <div className="author-avatar">
                <Avatar size={100} src="https://user-gold-cdn.xitu.io/2020/6/12/172a463263cc9ee1?imageView2/1/w/180/h/180/q/85/format/webp/interlace/1" />
            </div>
            <div className="author-name">核动力喷火霸王龙</div>
            <div className="author-introduction">
                一个普通的程序龙
            </div>
            <Divider>社交账号</Divider>
            <div className="author-links">
                <Avatar size={30} icon={<GithubOutlined />} />
                <Avatar size={30} icon={<ZhihuOutlined />} />
                <Avatar size={30} icon={<WechatOutlined />} />
            </div>

        </div>

    )
}
export default Author