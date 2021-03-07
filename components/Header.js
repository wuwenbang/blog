import React from 'react'
// import '../styles/components/header.css'
import { Row, Col, Menu } from 'antd'
import {
    HomeOutlined,
    SmileOutlined,
    YoutubeOutlined
} from '@ant-design/icons';

const Header = () => {
    return (
        <div className="header">
            <Row justify="space-between" type="flex">
                <Col xs={24} sm={24} md={10} lg={15} xl={12}>
                    <span className="header-logo">Planet Blog</span>
                    <span className="header-txt">Hello Earth Man</span>
                </Col>
                <Col className="header-menu" xs={0} sm={0} md={14} lg={8} xl={6} >
                    <Menu mode="horizontal">
                        <Menu.Item>
                            <HomeOutlined />
                            <span>首页</span>
                        </Menu.Item>
                        <Menu.Item>
                            <YoutubeOutlined />
                            <span>视频</span>
                        </Menu.Item>
                        <Menu.Item>
                            <SmileOutlined />
                            <span>生活</span>
                        </Menu.Item>
                    </Menu>
                </Col>
            </Row>
        </div>
    )
}
export default Header