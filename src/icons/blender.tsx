"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 10h-3a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h10.802a1 1 0 0 1 .984 1.179l-1.786 9.821"}],["path",{"d":"M8 4l2 11"}],["path",{"d":"M11 15h4a3 3 0 0 1 3 3v2a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-2a3 3 0 0 1 3 -3"}],["path",{"d":"M12 4v-1h2v1"}],["path",{"d":"M13 18v.01"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[11.4,9.5],"a":0.06},{"fx":"pop","n":[1,2,3,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[9,9.5],[13,18],[13,3.5],[13,18.01]]}];

export const BlenderIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BlenderIcon.displayName = "BlenderIcon";
