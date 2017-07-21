import React from 'react';
import { Table } from 'antd';
import {observer, inject} from 'mobx-react';

const columns = [{
    title: 'ID',
    dataIndex: 'ID',
    key: 'ID',
    render: text => <a href="#">{text}</a>,
}, {
    title: 'Title',
    dataIndex: 'Title',
    key: 'Title',
}, {
    title: 'Created',
    dataIndex: 'Created',
    key: 'Created',
}];


@inject('pipeState') @observer
class PageContent extends React.Component {
    constructor(props) {
        super(props)
        const { pipeState } = this.props
        pipeState.fetchPipes()
        this.pipelines = pipeState.pipelines
    }

    render() {
        return (<Table columns={columns} dataSource={this.props.pipeState.pipelines} />);
    }
}

export default PageContent;