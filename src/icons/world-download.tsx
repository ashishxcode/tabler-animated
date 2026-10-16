"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M21 12a9 9 0 1 0 -9 9"}],["path",{"d":"M3.6 9h16.8"}],["path",{"d":"M3.6 15h8.4"}],["path",{"d":"M11.578 3a17 17 0 0 0 0 18"}],["path",{"d":"M12.5 3c1.719 2.755 2.5 5.876 2.5 9"}],["path",{"d":"M18 14v7m-3 -3l3 3l3 -3"}]];
const rig: Rig[] = [{"fx":"nudge","n":[1,2,3,4,5],"o":[12.3,12],"d":[0,2.4]}];

export const WorldDownloadIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
WorldDownloadIcon.displayName = "WorldDownloadIcon";
