(function(){
  const cfg=window.PUNEETH_APPWRITE||{};
  const configured=cfg.endpoint&&!cfg.endpoint.includes("<REGION>")&&cfg.projectId&&!cfg.projectId.includes("<PROJECT_ID>")&&cfg.databaseId&&!cfg.databaseId.includes("<DATABASE_ID>");
  let account=null,tablesDB=null;
  if(configured&&window.Appwrite){const client=new Appwrite.Client().setEndpoint(cfg.endpoint).setProject(cfg.projectId);account=new Appwrite.Account(client);tablesDB=new Appwrite.TablesDB(client);}
  async function currentUser(){if(!account)return null;try{return await account.get()}catch(_){return null}}
  async function saveQuizAttempt(a){
    const user=await currentUser();if(!user||!tablesDB)return {saved:false,reason:"not-configured-or-signed-out"};
    try{
      const result=await tablesDB.createRow({databaseId:cfg.databaseId,tableId:cfg.quizAttemptsTableId,rowId:Appwrite.ID.unique(),data:{userId:user.$id,quizId:a.quizId,phaseId:a.phaseId,topic:a.topic,score:Number(a.score||0),maxScore:Number(a.maxScore||0),elapsedSeconds:Number(a.elapsedSeconds||0),answersJson:JSON.stringify(a.answers||{}),completedAt:new Date().toISOString()},permissions:[Appwrite.Permission.read(Appwrite.Role.user(user.$id)),Appwrite.Permission.update(Appwrite.Role.user(user.$id)),Appwrite.Permission.delete(Appwrite.Role.user(user.$id))]});
      return {saved:true,result};
    }catch(error){console.warn("Appwrite quiz attempt save failed:",error);return {saved:false,reason:error?.message||"save-failed"}}
  }
  window.PuneethAppwrite={configured:()=>configured,currentUser,saveQuizAttempt};
})();