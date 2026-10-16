"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 6l11 0"}],["path",{"d":"M9 12l11 0"}],["path",{"d":"M9 18l11 0"}],["path",{"d":"M5 6l0 .01"}],["path",{"d":"M5 12l0 .01"}],["path",{"d":"M5 18l0 .01"}]];
const rig: Rig[] = [{"fx":"slide","n":[0,1,2,3,4,5],"o":[12.5,12.01],"d":[2.4,0],"st":0.06}];

export const ListIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ListIcon.displayName = "ListIcon";
