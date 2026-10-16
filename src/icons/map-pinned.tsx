"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M14.828 10.828a4 4 0 1 0 -5.656 0l2.828 2.829l2.828 -2.829"}],["path",{"d":"M12 8v.01"}],["path",{"d":"M6 12h-.142a2 2 0 0 0 -1.923 1.45l-.858 3a2 2 0 0 0 1.924 2.55h13.999a2 2 0 0 0 1.923 -2.55l-.857 -3a2 2 0 0 0 -1.923 -1.45h-.143"}]];
const rig: Rig[] = [{"fx":"hop","n":[0,1,2],"o":[12,19],"d":[0,-2.2]}];

export const MapPinnedIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MapPinnedIcon.displayName = "MapPinnedIcon";
