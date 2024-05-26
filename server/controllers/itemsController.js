let items = [];

const getAllItems = (req, res) => {
    res.json(items);
};

const createItem = (req, res) => {
    const newItem = req.body;
    items.push(newItem);
    res.status(201).json(newItem);
};

const updateItem = (req, res) => {
    const itemId = req.params.id;
    const updatedItem = req.body;
    const index = items.findIndex(item => item.id === itemId);
    if (index !== -1) {
        items[index] = { ...items[index], ...updatedItem };
        res.json(items[index]);
    } else {
        res.status(404).json({ error: 'Ítem no encontrado' });
    }
};

const deleteItem = (req, res) => {
    const itemId = req.params.id;
    const index = items.findIndex(item => item.id === itemId);
    if (index !== -1) {
        const deletedItem = items.splice(index, 1);
        res.json(deletedItem);
    } else {
        res.status(404).json({ error: 'Ítem no encontrado' });
    }
};

module.exports = {
    getAllItems,
    createItem,
    updateItem,
    deleteItem
};
