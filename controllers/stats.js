import Stat from '../models/Stat.js';

export const getStats = async (req, res) => {
  try {
    const stats = await Stat.find();
    res.json(stats);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const getStat = async (req, res) => {
  try {
    const { id } = req.params;
    const stat = await Stat.findById(id);

    if (stat) {
      return res.json(stat);
    }

    res.status(404).json({ message: 'Stat not found' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const createState = async (req, res) => {
  try {
    const stat = new Stat(req.body);
    await stat.save();
    res.status(201).json(stat);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateStat = async (req, res) => {
  try {
    const { id } = req.params;
    const stat = await Stat.findByIdAndUpdate(id, req.body)
    res.status(201).json(stat);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const deleteStat = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Stat.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("Stat deleted");
    }

    throw new Error("Stat not found");

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};