import Page from './page.js';

class MagicSetPage extends Page {
   
   //class="card-container-table table table-striped table-sm"
    get cardTable () {
        return $('.card-container-table');
    }
    
    //document.getElementsByClassName("card-container-table")[0].rows[2].cells[8]


    get cardTableRow() {
        return $('.card-container-table tr')[3]
    }


    async getWeeklyGrowers() {
        // console.log('solutions: ' + JSON.stringify(this.solutions))
        await this.cardTable.waitForClickable();
    }

    async getDailyGrowers() {

    }
    async testRows() {
        await cardTableRow()
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open (magicSet) {

        return super.open(magicSet + '#paper');
    }

}

export default new MagicSetPage();