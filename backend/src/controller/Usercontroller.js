import collectionModel from "../db/collectionsSche.js";

export const createItem = async (req, res) => {
    try {
        const {productName, category, price, description, available, productImage} =
        req.body;
        const newItem = new collectionModel({
            productName,
            category,
            price,
            description,
            available,
            productImage
        })
        await newItem.save();
        console.log(newItem);
        res.sendStatus(200).json({message : "newItem submitted successfully", Collection: newItem});
    } catch (error) {
        console.log("error", error);
        res.sendStatus(404).json({message : "something went wrong"});
    }
};

export const getItems = async (req, res) => {
    try {
        const items = await collectionModel.find();
        console.log(items);
        res.sendStatus(200).json({message: "Items fetched successfully", items: items});
    } catch (error) {
        console.log("error", error);
        res.sendStatus(500).json({message: "Internal server error" });
    }
};

export const singleItem = async (req, res) => {
    try {
        const { id } = req.params;
        const item = await collectionModel.findById(id);
        console.log(item);
        if(!item){
            res.sendStatus(404).json({message: "Item not found"});
        }
        res.sendStatus(200).json({message : "Item fetched successfully", item: item});
    } catch (error) {
        console.log("Error", error);
        res.sendStatus(500).json({message: "Item not found"});
    }
};

export const updateItem = async (req, res) => {
    try {
        const { id } = req.params;
        const { productName, category, price, description, available, productImage } = req.body;
        const editedItem = await collectionModel.findByIdAndUpdate(
            id, {
            productName,
            category,
            price,
            description,
            available,
            productImage,
        },
        {new: true}
    );
    if(!editedItem) {
        res.sendStatus(404).json({message: "Item not found"});
    }
    res.sendStatus(200).json({message: "Item updated successfully", item: editedItem});
    } catch (error) {
        console.log("error", error);
        res.sendStatus(500).json({message: "Internal server error"});
    }
};

export const deleteItem = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteItem = await collectionModel.findByIdAndDelete(id);
        console.log(deleteItem);
        if(!deleteItem) {
            res.sendStatus(404).json({message: "Item not found"});
        } 
        res.sendStatus(200).json({message: "Item deleted successfully", item: deleteItem});
    } catch (error) {
        console.log("error", error);
        res.sendStatus(500).json({message: "Internal server error"});
    }
};
