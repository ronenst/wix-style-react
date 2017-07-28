import React from 'react';
import DataTable from 'wix-style-react/DataTable';
import s from './Example.scss';

const style = {
  width: '100%',
  height: 600
};

const header = <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'red', height: 40}}>Pizdez</div>;

const data = [
      {name: 'Brian Vaughn', description: 'Software engineer', another: 'wut'},
      {name: 'Brian Vaughn', description: 'Software engineer', another: 'wat'},
      {name: 'Brian Vaughn', description: 'Software engineer', another: 'wat'},
      {name: 'Brian Vaughn', description: 'Software engineer', another: 'wat'},
      {name: 'Brian Vaughn', description: 'Software engineer', another: 'wat'}];

const columns = [
    {title: 'Name', render: (rowData, rowIndex) => rowData.name + rowIndex, width: '20%', sortable: true, sortKey: 'name'},
    {title: 'Description', render: rowData => <div style={{backgroundColor: 'goldenrod', color: 'blue', fontSize: 18}}>{rowData.description}</div>, width: '40%'},
    {title: () => <div>Another<span style={{marginLeft: 5, color: 'red'}}>KEK</span></div>, render: rowData => rowData.another, width: '20%', sortable: true, sortKey: 'author'},
];

const onRowClick = (row, index) => console.log(row, index);

class DataTableExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {sortDirection: 'ascent', sortByCol: 'name'};
  }
  switchSortDirection = () => {
    this.setState({sortDirection: this.state.sortDirection === 'ascent' ? 'descent' : 'ascent'});
  }

  onSort = sortKey => {
    this.setState({sortByCol: sortKey});
    if (sortKey === this.state.sortByCol) {
      this.switchSortDirection();
    }
  }
  render() {
    return (
      <div style={style}>
        <DataTable
          id="kek"
          columns={columns}
          data={data}
          pageHeading={header}
          isPage={false}
          height={400}
          hideHeader={false}
          onRowClick={onRowClick}
          sortDirection={this.state.sortDirection}
          columnToSortBy={this.state.sortByCol}
          onSort={this.onSort}
          />
      </div>
    );
  }
}

export default DataTableExample;
