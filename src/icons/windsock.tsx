"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M6 3v18"}],["path",{"d":"M6 11l12 -1v-4l-12 -1"}],["path",{"d":"M10 5.5v5"}],["path",{"d":"M14 6v4"}],["path",{"d":"M4 21h4"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[6,12],"a":0.06},{"fx":"pop","n":[1,2,3,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,8],[10,8],[14,8],[6,21]]}];

export const WindsockIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
WindsockIcon.displayName = "WindsockIcon";
