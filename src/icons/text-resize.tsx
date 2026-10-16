"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M17 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M3 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M17 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M5 7v10"}],["path",{"d":"M7 5h10"}],["path",{"d":"M7 19h10"}],["path",{"d":"M19 7v10"}],["path",{"d":"M10 10h4"}],["path",{"d":"M12 14v-4"}]];
const rig: Rig[] = [{"fx":"slide","n":[0,1,2,3,4,5,6,7,8,9],"o":[12,12],"d":[2.4,0],"st":0.06}];

export const TextResizeIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TextResizeIcon.displayName = "TextResizeIcon";
