"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4"}],["path",{"d":"M14.5 5.5l4 4"}],["path",{"d":"M12 8l-5 -5l-4 4l5 5"}],["path",{"d":"M7 8l-1.5 1.5"}],["path",{"d":"M16 12l5 5l-4 4l-5 -5"}],["path",{"d":"M16 17l-1.5 1.5"}]];
const rig: Rig[] = [{"fx":"tilt","n":[0,1,2,3,4,5],"o":[12,21],"a":-16}];

export const ToolsIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ToolsIcon.displayName = "ToolsIcon";
