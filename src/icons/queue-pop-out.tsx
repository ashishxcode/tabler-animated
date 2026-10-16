"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M11 5h-6a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-6"}],["path",{"d":"M3 13h6a2 2 0 0 1 2 2v6"}],["path",{"d":"M16 3h5v5"}],["path",{"d":"M21 3l-6 6"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[11,13],"a":0.06},{"fx":"pop","n":[1,2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[7,17],[18.5,5.5],[18,6]]}];

export const QueuePopOutIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
QueuePopOutIcon.displayName = "QueuePopOutIcon";
