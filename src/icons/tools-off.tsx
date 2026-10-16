"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M16 12l4 -4a2.828 2.828 0 1 0 -4 -4l-4 4m-2 2l-7 7v4h4l7 -7"}],["path",{"d":"M14.5 5.5l4 4"}],["path",{"d":"M12 8l-5 -5m-2 2l-2 2l5 5"}],["path",{"d":"M7 8l-1.5 1.5"}],["path",{"d":"M16 12l5 5m-2 2l-2 2l-5 -5"}],["path",{"d":"M16 17l-1.5 1.5"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[6],"o":[12,12],"dl":0.25},{"fx":"pop","n":[5],"o":[15.25,17.75],"a":0.35,"dl":0.2},{"fx":"tilt","n":[0,1,2,3,4],"o":[12,21],"a":-16}];

export const ToolsOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ToolsOffIcon.displayName = "ToolsOffIcon";
