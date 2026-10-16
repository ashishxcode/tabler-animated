"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M17 15l4 4m0 -4l-4 4"}],["path",{"d":"M7 6v-1h11v1"}],["path",{"d":"M7 19l4 0"}],["path",{"d":"M13 5l-4 14"}]];
const rig: Rig[] = [{"fx":"pop","n":[1,3],"o":[12.5,12],"a":0.06},{"fx":"pop","n":[0,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[19,17],[9,19]]}];

export const ClearFormattingIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ClearFormattingIcon.displayName = "ClearFormattingIcon";
