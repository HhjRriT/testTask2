describe("Cypress Tests", () => {
    [[0,1,1],[1,1,2],[2,2,4],[5,5,10],[4,3,7],[0,8,8]].forEach(i => {
        it(`calc test ${i}`, () => {
            cy.fixture("testTask").then(data => {
                cy.visit(data.main_url)
                cy.get("input[id='outlined-required']").should("have.length", 2).first().type(i[0])
                cy.get("input[id='outlined-required']").should("have.length", 2).last().type(i[1])
                cy.get("button").click()
                cy.get("div[class='makeStyles-result-4']").should("have.text", `Result is: ${i[2]}`)
            })
        })
    })
})