"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 16.5a2.5 2.5 0 0 0 5 0a1.5 1.5 0 0 0 -1.5 -1.5h-2a1.5 1.5 0 0 0 -1.5 1.5"}],["path",{"d":"M15 18.5a2.5 2.5 0 0 0 5 0a1.5 1.5 0 0 0 -1.5 -1.5h-2a1.5 1.5 0 0 0 -1.5 1.5"}],["path",{"d":"M8.52 12h-4.04c-.348 0 -.678 -.179 -.823 -.496c-1.326 -2.904 -.774 -8.504 2.843 -8.504s4.17 5.6 2.843 8.504c-.145 .317 -.475 .496 -.824 .496"}],["path",{"d":"M19.52 14h-4.04c-.348 0 -.678 -.179 -.823 -.496c-1.326 -2.904 -.774 -8.504 2.843 -8.504s4.17 5.6 2.843 8.504c-.145 .317 -.475 .496 -.824 .496"}]];
const rig: Rig[] = [{"fx":"pop","n":[2,3],"o":[12,8.5],"a":0.06},{"fx":"pop","n":[0,1],"a":0.24,"dl":0.1,"st":0.07,"os":[[6.5,17],[17.5,19]]}];

export const FootstepsIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
FootstepsIcon.displayName = "FootstepsIcon";
