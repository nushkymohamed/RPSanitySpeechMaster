import createSchema from 'part:@sanity/base/schema-creator'
import communicationBoard from "./CommunicationSkills/CommunicationBoard";
import firstThenBoard from "./CommunicationSkills/First-Then-Board";
import comprehensionBuilding from "./CommunicationSkills/ComprehensionBuilding";
import communicationBoardFolders from "./CommunicationSkills/CommunicationBoardFolders";
import schemaTypes from 'all:part:@sanity/base/schema-type'
import firstThenBoardTasks from "./CommunicationSkills/First-Then-Board-Tasks";
import firstThenBoardRewards from "./CommunicationSkills/First-Then-Board-Rewards";
export default createSchema({

  name: 'default',

  types: schemaTypes.concat([
    communicationBoardFolders,
    communicationBoard,
    firstThenBoard,
    firstThenBoardTasks,
    firstThenBoardRewards,
    comprehensionBuilding,


  ]),
})
