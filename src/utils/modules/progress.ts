import { getTasks } from './time';

export const getTaskProgress = async (id: string) => {

  let progress = 0;
  const tasks = await getTasks();
  const index = tasks.findIndex(x => x.uid === id);
  if(index != -1 ){
    if(tasks[index].limitHour == 0 && tasks[index].limitMinutes == 0){
       return (100);
    }  
    const p = (tasks[index].limitHour * 60 * 60 * 1000) + ( tasks[index].limitMinutes * 60 * 1000 ) 
    progress = tasks[index].progress * 100 / p;
    if(progress > 100)
      return 100;
  }
  return progress;
}
