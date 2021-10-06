Feature('Test API');
Scenario('Check list api', async({ I }) => {

    const res = await I.sendGetRequest('/forms');
    await I.assertEqual(res.status, 200);
    console.log(res.data);



})