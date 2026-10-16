"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M15 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M11 8a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M11 16a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M12 15v-6"}],["path",{"d":"M15 11l-2 -2"}],["path",{"d":"M11 7l-1.9 -1.9"}],["path",{"d":"M13.446 2.6l7.955 7.954a2.045 2.045 0 0 1 0 2.892l-7.955 7.955a2.045 2.045 0 0 1 -2.892 0l-7.955 -7.955a2.045 2.045 0 0 1 0 -2.892l7.955 -7.955a2.045 2.045 0 0 1 2.892 0"}]];
const rig: Rig[] = [{"fx":"draw","n":[0,1,2,3,4,5,6],"o":[12,12],"st":0.1}];

export const BrandGitIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandGitIcon.displayName = "BrandGitIcon";
