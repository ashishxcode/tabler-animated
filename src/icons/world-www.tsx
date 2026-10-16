"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M19.5 7a9 9 0 0 0 -7.5 -4a8.991 8.991 0 0 0 -7.484 4"}],["path",{"d":"M11.5 3a16.989 16.989 0 0 0 -1.826 4"}],["path",{"d":"M12.5 3a16.989 16.989 0 0 1 1.828 4"}],["path",{"d":"M19.5 17a9 9 0 0 1 -7.5 4a8.991 8.991 0 0 1 -7.484 -4"}],["path",{"d":"M11.5 21a16.989 16.989 0 0 1 -1.826 -4"}],["path",{"d":"M12.5 21a16.989 16.989 0 0 0 1.828 -4"}],["path",{"d":"M2 10l1 4l1.5 -4l1.5 4l1 -4"}],["path",{"d":"M17 10l1 4l1.5 -4l1.5 4l1 -4"}],["path",{"d":"M9.5 10l1 4l1.5 -4l1.5 4l1 -4"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,3],"o":[12.01,12],"a":0.06},{"fx":"draw","n":[1,2,4,5,6,7,8],"o":[12,12],"dl":0.1,"st":0.1}];

export const WorldWwwIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
WorldWwwIcon.displayName = "WorldWwwIcon";
