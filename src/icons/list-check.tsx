"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3.5 5.5l1.5 1.5l2.5 -2.5"}],["path",{"d":"M3.5 11.5l1.5 1.5l2.5 -2.5"}],["path",{"d":"M3.5 17.5l1.5 1.5l2.5 -2.5"}],["path",{"d":"M11 6l9 0"}],["path",{"d":"M11 12l9 0"}],["path",{"d":"M11 18l9 0"}]];
const rig: Rig[] = [{"fx":"slide","n":[0,1,2,3,4,5],"o":[11.75,11.75],"d":[2.4,0],"st":0.06}];

export const ListCheckIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ListCheckIcon.displayName = "ListCheckIcon";
