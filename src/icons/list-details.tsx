"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M13 5h8"}],["path",{"d":"M13 9h5"}],["path",{"d":"M13 15h8"}],["path",{"d":"M13 19h5"}],["path",{"d":"M3 5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4"}],["path",{"d":"M3 15a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4"}]];
const rig: Rig[] = [{"fx":"slide","n":[0,1,2,3,4,5],"o":[12,12],"d":[2.4,0],"st":0.06}];

export const ListDetailsIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ListDetailsIcon.displayName = "ListDetailsIcon";
