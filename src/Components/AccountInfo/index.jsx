import NewAccount from "../Form";

function AccountInfo(props) {
  const { formData, setFormData, page, setPage } = props;

  return <div>{formData.type === 1 ? <ChangePass props={props}/> : <NewAccount props={props}/>}</div>;
}

export default AccountInfo;
