import React from 'react';
import '../styles/listdata.css';

class ListData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  };

  render() {
    var listType = this.props.listdata.length !== 0 ? this.props.listdata[0].project : '';
    var total = 0;
    for (var i = 0; i < this.props.listdata.length; i++) {
      total = total + parseInt(this.props.listdata[i].minutes);
    };
    return (
      (this.props.listdata.length === 0)
        ? (
          <div>

          </div>
        ) :
        (
          <div className="listdiv">
            <h1>{listType}</h1>
            <h1><span id="total">{total}</span></h1>
            {this.props.listdata
              .sort((a, b) => { return b.minutes - a.minutes })
              .map((data, index) => {
                return (
                  <div>
                    <h6>
                      {data.minutes}
                    </h6>
                    <h6>
                      {data.description}
                    </h6>
                  </div>
                )
              })}

          </div >
        )

    );
  }

}
export default ListData;