"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 21h10v-10a3 3 0 0 0 -3 -3h-4a3 3 0 0 0 -3 3v10"}],["path",{"d":"M15 3h-6a2 2 0 0 0 -2 2"}],["path",{"d":"M12 3v5"}],["path",{"d":"M12 11v4"}],["path",{"d":"M10 13h4"}]];
const rig: Rig[] = [{"fx":"tap","n":[0,1,2,3,4],"o":[12,21]}];

export const HandSanitizerIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
HandSanitizerIcon.displayName = "HandSanitizerIcon";
