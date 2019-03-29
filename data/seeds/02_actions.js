
exports.seed = function(knex, Promise) {
  return knex('actions').insert([
        {
          description: 'Fork and Clone',
          notes:'Fork Lambda project repo and clone your own repo into terminal',
          completed: true,
          project_id: 1
        },
        {
          description: 'Save, Add, and Commit',
          notes: 'Save your changes, Add to own branch repo and do not forget to commit',
          completed: true,
          project_id: 1
        },
        {
          description: 'Pull request',
          notes: 'Add PM as collaborator, pull request with PM as the reviewer',
          completed: true,
          project_id: 1
        }
      ]);
};
