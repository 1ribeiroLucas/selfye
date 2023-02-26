export async function getTasksModel(res: any): Promise<void> {
  console.log('chegou no model');
  res.json({ tasks: [] });
};