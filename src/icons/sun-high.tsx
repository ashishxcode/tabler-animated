"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M14.828 14.828a4 4 0 1 0 -5.656 -5.656a4 4 0 0 0 5.656 5.656"}],["path",{"d":"M6.343 17.657l-1.414 1.414"}],["path",{"d":"M6.343 6.343l-1.414 -1.414"}],["path",{"d":"M17.657 6.343l1.414 -1.414"}],["path",{"d":"M17.657 17.657l1.414 1.414"}],["path",{"d":"M4 12h-2"}],["path",{"d":"M12 4v-2"}],["path",{"d":"M20 12h2"}],["path",{"d":"M12 20v2"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12.05,11.95],"a":0.1},{"fx":"spin","n":[1,2,3,4,5,6,7,8],"o":[12,12],"a":45,"sym":true}];

export const SunHighIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SunHighIcon.displayName = "SunHighIcon";
