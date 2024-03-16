
"use strict";

let SetLabel = require('./SetLabel.js')
let RemoveLabel = require('./RemoveLabel.js')
let GetMap = require('./GetMap.js')
let GetNodeData = require('./GetNodeData.js')
let ResetPose = require('./ResetPose.js')
let PublishMap = require('./PublishMap.js')
let SetGoal = require('./SetGoal.js')
let GlobalBundleAdjustment = require('./GlobalBundleAdjustment.js')
let ListLabels = require('./ListLabels.js')
let AddLink = require('./AddLink.js')
let GetNodesInRadius = require('./GetNodesInRadius.js')
let CleanupLocalGrids = require('./CleanupLocalGrids.js')
let GetPlan = require('./GetPlan.js')
let DetectMoreLoopClosures = require('./DetectMoreLoopClosures.js')
let LoadDatabase = require('./LoadDatabase.js')
let GetMap2 = require('./GetMap2.js')

module.exports = {
  SetLabel: SetLabel,
  RemoveLabel: RemoveLabel,
  GetMap: GetMap,
  GetNodeData: GetNodeData,
  ResetPose: ResetPose,
  PublishMap: PublishMap,
  SetGoal: SetGoal,
  GlobalBundleAdjustment: GlobalBundleAdjustment,
  ListLabels: ListLabels,
  AddLink: AddLink,
  GetNodesInRadius: GetNodesInRadius,
  CleanupLocalGrids: CleanupLocalGrids,
  GetPlan: GetPlan,
  DetectMoreLoopClosures: DetectMoreLoopClosures,
  LoadDatabase: LoadDatabase,
  GetMap2: GetMap2,
};
