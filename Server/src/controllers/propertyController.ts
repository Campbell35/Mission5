import { Request, Response } from 'express';
import PropertyModel from '../models/PropertyModel';

// PropertyController
export const getProperty = async (req: Request, res: Response): Promise<void> => {
  try {
    // Fetch property data from MongoDB Atlas
    const property = await PropertyModel.findById(req.params.id);

    if (!property) {
      res.status(404).json({ error: 'Property not found' });
      return;
    }

    // Send the property data as a JSON response
    res.json(property);
  } catch (error) {
    console.error('Error retrieving property:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
