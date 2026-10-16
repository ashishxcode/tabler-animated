"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 1.83 -1.19"}],["path",{"d":"M7 11l5 5l2 -2m2 -2l1 -1"}],["path",{"d":"M12 4v4m0 4v4"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[3],"o":[12,12],"dl":0.25},{"fx":"nudge","n":[0,1,2],"o":[11.92,12.5],"d":[0,2.4]}];

export const DownloadOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DownloadOffIcon.displayName = "DownloadOffIcon";
