"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 20h6"}],["path",{"d":"M12 20v-8"}],["path",{"d":"M7.325 7.35l-2.325 4.65h7m4 0h3l-4 -8h-6l-.338 .676"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[3],"o":[12,12],"dl":0.25},{"fx":"flash","n":[0,1,2],"o":[12,12]}];

export const LampOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
LampOffIcon.displayName = "LampOffIcon";
