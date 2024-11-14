import client from './elasticClient';
import { Activity } from "@/shared/types";


// Function to add an activity to the index
export const addActivity = async (activity: Activity) => {
  try {
    const response = await client.index({
      index: 'activities',
      document: activity,
    });
    console.log('Document added:', response);
    return response._id;
  } catch (error) {
    console.error('Error adding document:', error);
  }
};

// Function to retrieve all activities from the index
export const getActivities = async () => {
  try {
    const response = await client.search({
      index: 'activities',
      query: { match_all: {} },
    });
    return response.hits.hits;
  } catch (error) {
    console.error('Error fetching activities:', error);
  }
};

// Function to update an activity by ID
export const updateActivity = async (id: string, updatedActivity: Activity) => {
  try {
    const response = await client.update({
      index: 'activities',
      id: id,
      doc: updatedActivity,
    });
    console.log('Document updated:', response);
  } catch (error) {
    console.error('Error updating document:', error);
  }
};

// Function to delete an activity by ID
export const deleteActivity = async (id: string) => {
  try {
    const response = await client.delete({
      index: 'activities',
      id: id,
    });
    console.log('Document deleted:', response);
  } catch (error) {
    console.error('Error deleting document:', error);
  }
};
