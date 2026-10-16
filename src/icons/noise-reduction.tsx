"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M21 12a9 9 0 1 1 -18 0a9 9 0 0 1 18 0"}],["path",{"d":"M10.01 18h-.01"}],["path",{"d":"M14.01 14h-.01"}],["path",{"d":"M16.01 12h-.01"}],["path",{"d":"M18.01 10h-.01"}],["path",{"d":"M16.01 16h-.01"}],["path",{"d":"M14.01 18h-.01"}],["path",{"d":"M18.01 14h-.01"}],["path",{"d":"M12.01 16h-.01"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,12],"a":0.06},{"fx":"pop","n":[1,2,3,4,5,6,7,8],"a":0.24,"dl":0.1,"st":0.07,"os":[[10,18],[14.01,14],[16.01,12],[18.01,10],[16.01,16],[14.01,18],[18.01,14],[12.01,16]]}];

export const NoiseReductionIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
NoiseReductionIcon.displayName = "NoiseReductionIcon";
