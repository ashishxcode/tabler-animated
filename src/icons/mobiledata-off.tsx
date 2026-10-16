"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M16 12v-8"}],["path",{"d":"M8 20v-8"}],["path",{"d":"M13 7l3 -3l3 3"}],["path",{"d":"M5 17l3 3l3 -3"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[4],"o":[12,12],"dl":0.25},{"fx":"pop","n":[0,1,2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[16,8],[8,16],[16,5.5],[8,18.5]]}];

export const MobiledataOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MobiledataOffIcon.displayName = "MobiledataOffIcon";
