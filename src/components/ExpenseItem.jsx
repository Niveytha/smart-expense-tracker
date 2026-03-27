function ExpenseItem({ title, amount, date }) {
  function handleClick() {
    console.log("Clicked:", title);
  }

  return (
    <div>
      <h3>{title}</h3>
      <p>${amount}</p>
      <p>{date}</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default ExpenseItem;
