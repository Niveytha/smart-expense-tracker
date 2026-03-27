function ExpenseItem(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>${props.amount}</p>
      <p>{props.date}</p>
    </div>
  );
}

export default ExpenseItem;
