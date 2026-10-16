"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M10 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M3 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M17.57 17.602a2 2 0 0 0 2.83 2.827"}],["path",{"d":"M11.113 11.133a3 3 0 1 0 3.765 3.715"}],["path",{"d":"M12 7v1"}],["path",{"d":"M6.7 17.8l2.8 -2"}],["path",{"d":"M17.3 17.8l-2.8 -2"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[7],"o":[12,12],"dl":0.25},{"fx":"pop","n":[2,6],"o":[17.45,18.41],"a":0.35,"dl":0.2},{"fx":"pop","n":[0,1,3,4,5],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,5],[5,19],[11.94,14.07],[12,7.5],[8.1,16.8]]}];

export const SocialOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SocialOffIcon.displayName = "SocialOffIcon";
