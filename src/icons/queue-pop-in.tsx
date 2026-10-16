"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 6h-3a2 2 0 0 0 -2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2 -2v-3.357"}],["path",{"d":"M13 5a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-4"}],["path",{"d":"M13.5 10.5l-5.5 5.5"}],["path",{"d":"M8 11v5h5"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[10.5,13.5],"a":0.06},{"fx":"pop","n":[1,2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[17,7],[10.75,13.25],[10.5,13.5]]}];

export const QueuePopInIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
QueuePopInIcon.displayName = "QueuePopInIcon";
