"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 4h14a1 1 0 0 1 1 1v5a1 1 0 0 1 -1 1h-7a1 1 0 0 0 -1 1v7a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1"}],["path",{"d":"M4 8l2 0"}],["path",{"d":"M4 12l3 0"}],["path",{"d":"M4 16l2 0"}],["path",{"d":"M8 4l0 2"}],["path",{"d":"M12 4l0 3"}],["path",{"d":"M16 4l0 2"}]];
const rig: Rig[] = [{"fx":"tilt","n":[0,1,2,3,4,5,6],"o":[12,20],"a":-16}];

export const RulerIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
RulerIcon.displayName = "RulerIcon";
