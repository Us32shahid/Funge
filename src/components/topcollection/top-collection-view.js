const TopCollectionsView = (props) => {
    return (
        <tr>
          <th>
            <h4 className="pt-2">{props.detail.id}</h4>
          </th>
          <td>
            <div className="d-flex align-items-center">
              <img
                src={"./assets/images/"+props.detail.image_name}
                alt=""
                className="img-fluidw-100"
              />
  
              <h3 className="font-16 w-600 ms-3">{props.detail.name}</h3>
            </div>
          </td>
          <td className="font-14">
            Floor <br />
            <div className=" font-16 w-600 text-gray ">{props.detail.floor}</div>
          </td>
          <td className="font-14">
            Total Vol <br />
            <div className=" font-16 w-600 text-gray ">{props.detail.total_val}</div>
          </td>
  
          <td className="font-14">
            24h Vol <br />
            <div className=" font-16 w-600 text-gray ">{props.detail.vol1}</div>
          </td>
  
          <td className="font-14">
            24h Vol% <br />
            <div className=" font-16 w-600 funge-color d-flex w-600">
            {props.detail.vol2}{" "}
              <img
                src={"./assets/icon/up_arrow_green.svg"}
                alt=""
                className=" ms-3 img-fluid"
              />
            </div>
          </td>
        </tr>
    );
  };
  
  export default TopCollectionsView;
  