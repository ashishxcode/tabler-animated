"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M16 12v-8"}],["path",{"d":"M8 20v-8"}],["path",{"d":"M13 7l3 -3l3 3"}],["path",{"d":"M5 17l3 3l3 -3"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3],"o":[12,12],"a":0.06}];

export const MobiledataIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MobiledataIcon.displayName = "MobiledataIcon";
