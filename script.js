//your code here
const itemNameInput = document.getElementById('item-name-input');
    const itemPriceInput = document.getElementById('item-price-input');
    const addButton = document.getElementById('add-button');
    const shoppingList = document.getElementById('shopping-list');
    let grandTotal = 0;

    addButton.addEventListener('click', () => {
      const itemName = itemNameInput.value.trim();
      const itemPrice = parseFloat(itemPriceInput.value.trim());

      if (!itemName || isNaN(itemPrice) || itemPrice <= 0) {
        alert('Invalid input! Please enter a valid item name and price.');
        return;
      }
		const row = document.createElement('tr');
      const itemNameCell = document.createElement('td');
      const itemPriceCell = document.createElement('td');
      itemNameCell.textContent = itemName;
      itemPriceCell.textContent = itemPrice.toFixed(2);
      itemNameCell.setAttribute('data-ns-test', 'item-name');
      itemPriceCell.setAttribute('data-ns-test', 'item-price');
      row.appendChild(itemNameCell);
      row.appendChild(itemPriceCell);
      shoppingList.appendChild(row);

      grandTotal += itemPrice;
      document.querySelector('[data-ns-test="grandTotal"]').textContent = grandTotal.toFixed(2);

      itemNameInput.value = '';
      itemPriceInput.value = '';
    });
