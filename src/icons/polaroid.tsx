"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12"}],["path",{"d":"M4 16l16 0"}],["path",{"d":"M4 12l3 -3c.928 -.893 2.072 -.893 3 0l4 4"}],["path",{"d":"M13 12l2 -2c.928 -.893 2.072 -.893 3 0l2 2"}],["path",{"d":"M14 7l.01 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,12],"a":0.06},{"fx":"pop","n":[1,2,3,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,16],[9,10.67],[16.5,10.67],[14.01,7]]}];

export const PolaroidIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PolaroidIcon.displayName = "PolaroidIcon";
